<?php

namespace App\Services;


use App\Models\Motor;
use App\Services\BaseService;

class MotorService extends BaseService
{

    protected $model;

    public function __construct()
    {
        $this->model = Motor::class;
    }

    public function storeOrUpdate($data, $id = null)
    {
        try {
            // Call patent method
            return parent::storeOrUpdate($data, $id);
        } catch (\Exception $e) {
            $this->logFlashThrow($e);
        }
    }
}

